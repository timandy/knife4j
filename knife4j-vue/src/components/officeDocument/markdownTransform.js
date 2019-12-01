import KUtils from '@/core/utils'

/**
 * 根据当前swagger分组实例得到当前组下markdown纯文本
 * @param {*} instance 
 */
export default function markdownText(instance) {
  var markdownCollections = [];
  if (instance != null && instance != undefined) {
    createBasicInfo(instance, markdownCollections);
    createTagsInfo(instance, markdownCollections);
  }
  return markdownCollections.join('\n');
}

/**
 * 主动换行
 * @param {*} markdownCollections 
 */
function markdownLines(markdownCollections) {
  markdownCollections.push('\n');
}

/**
 * 基本信息
 * @param {*} instance 当前分组实例对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createBasicInfo(instance, markdownCollections) {
  markdownCollections.push('# ' + instance.title);
  markdownLines(markdownCollections);
  markdownCollections.push('**简介**:' + instance.description);
  markdownLines(markdownCollections);
  markdownCollections.push('**HOST**:' + instance.host);
  markdownLines(markdownCollections);
  markdownCollections.push('**联系人**:' + instance.contact);
  markdownLines(markdownCollections);
  markdownCollections.push('**Version**:' + instance.version);
  markdownLines(markdownCollections);
  markdownCollections.push('**接口路径**:' + instance.url);
  markdownLines(markdownCollections);
  //第三方md软件Typora目录格式
  markdownCollections.push('[TOC]');
  markdownLines(markdownCollections);
}

/**
 * 遍历tags分组信息
 * @param {*} instance  当前分组实例对象
 * @param {*} markdownCollections markdown文本集合对象 
 */
function createTagsInfo(instance, markdownCollections) {
  if (instance.tags != undefined && instance.tags != null) {
    markdownCollections.push('\n');
    instance.tags.forEach(function (tag) {
      markdownLines(markdownCollections);
      markdownCollections.push('# ' + tag.name)
      if (tag.childrens != undefined && tag.childrens != null && tag.childrens.length > 0) {
        //遍历
        tag.childrens.forEach(function (apiInfo) {
          createApiInfo(apiInfo, markdownCollections);
        })
      } else {
        markdownCollections.push('暂无接口文档')
      }
    })

  }
}

/**
 * 遍历接口详情
 * @param {*} apiInfo 接口实例
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiInfo(apiInfo, markdownCollections) {
  //二级标题
  markdownLines(markdownCollections);
  markdownCollections.push('## ' + apiInfo.summary);
  markdownLines(markdownCollections);
  markdownCollections.push('**接口地址**:`' + apiInfo.showUrl + '`');
  markdownLines(markdownCollections);
  markdownCollections.push('**请求方式**:`' + apiInfo.methodType + '`');
  markdownLines(markdownCollections);
  markdownCollections.push('**请求数据类型**:`' + KUtils.toString(apiInfo.consumes, '*') + '`');
  markdownLines(markdownCollections);
  markdownCollections.push('**响应数据类型**:`' + KUtils.toString(apiInfo.produces, '*') + '`');
  markdownLines(markdownCollections);
  markdownCollections.push('**接口描述**:' + KUtils.toString(apiInfo.description, '暂无') + '');
  //判断是否有请求示例
  if (KUtils.checkUndefined(apiInfo.requestValue)) {
    markdownLines(markdownCollections);
    markdownCollections.push('**请求示例**:');
    markdownLines(markdownCollections);
    markdownCollections.push('```javascript');
    markdownCollections.push(apiInfo.requestValue);
    markdownCollections.push('```');
  }
  //请求参数
  createApiRequestParameters(apiInfo, markdownCollections);
  //响应状态
  createApiResponseStatus(apiInfo, markdownCollections);
  //响应Schema-参数
  //判断响应参数
  createApiResponseParameters(apiInfo, markdownCollections);

}
/**
 * 响应状态
 * @param {*} apiInfo 
 * @param {*} markdownCollections 
 */
function createApiResponseStatus(apiInfo, markdownCollections) {
  if (KUtils.checkUndefined(apiInfo.responseCodes) && apiInfo.responseCodes.length > 0) {
    markdownLines(markdownCollections);
    markdownCollections.push('**响应状态**:');
    markdownLines(markdownCollections);
    //拥有参数
    markdownCollections.push('| 状态码 | 说明 | schema |');
    markdownCollections.push('| -------- | -------- | ----- | ');
    apiInfo.responseCodes.forEach(function (respcode) {
      markdownCollections.push('|' + KUtils.toString(respcode.code, '') + '|' + KUtils.toString(respcode.description, '') + '|' + KUtils.toString(respcode.schema, '') + '|')
    })
  }
}

/**
 * 响应参数拥有响应头
 * @param {*} responseHeaderParameters 
 * @param {*} markdownCollections 
 */
function createApiResponseHeaderParams(responseHeaderParameters, markdownCollections) {
  if (KUtils.checkUndefined(responseHeaderParameters)) {
    if (responseHeaderParameters.length > 0) {
      markdownLines(markdownCollections);
      markdownCollections.push('**响应Header**:');
      markdownLines(markdownCollections);
      //拥有参数
      markdownCollections.push('| 参数名称 | 参数说明 | 数据类型 |');
      markdownCollections.push('| -------- | -------- | ----- | ');
      responseHeaderParameters.forEach(function (respHeader) {
        markdownCollections.push('|' + KUtils.toString(respHeader.name, '') + '|' + KUtils.toString(respHeader.description, '') + '|' + KUtils.toString(respHeader.type, '') + '|');
      })
    }
  }
}

/**
 * 响应参数
 * @param {*} apiInfo 
 * @param {*} markdownCollections 
 * @param {*} singleFlag 
 */
function createApiResponseParameters(apiInfo, markdownCollections) {
  var multipartData = [];
  let rcodes = apiInfo.responseCodes;
  if (rcodes != null && rcodes != undefined) {
    rcodes.forEach(function (rc) {
      //遍历
      if (rc.schema != undefined && rc.schema != null) {
        var respdata = [];
        if (
          rc.responseParameters != null &&
          rc.responseParameters.length > 0
        ) {
          respdata = respdata.concat(rc.responseParameters);
        }
        if (
          rc.responseTreetableRefParameters != null &&
          rc.responseTreetableRefParameters.length > 0
        ) {
          rc.responseTreetableRefParameters.forEach(function (ref) {
            respdata = respdata.concat(ref.params);
          });
        }
        let nrecodedatas = [];
        //遍历得到新的符合antd的树形结构
        if (respdata != null && respdata.length > 0) {
          respdata.forEach(function (md) {
            if (md.pid == '-1') {
              md.children = [];
              findRespModelChildren(md, respdata);
              //查找后如果没有,则将children置空
              if (md.children.length == 0) {
                md.children = null;
              }
              nrecodedatas.push(md);
            }
          });
        }
        var nresobj = {
          ...rc,
          data: nrecodedatas
        };
        multipartData.push(nresobj);
      }
    });
  }
  //判断是否为空
  if (multipartData.length > 0) {
    if (multipartData.length == 1) {
      //单个
      var multipData = multipartData[0]
      createApiResponseSingleParam(multipData, markdownCollections);
    } else {
      //多个
      multipartData.forEach(function (resp) {
        markdownLines(markdownCollections);
        markdownCollections.push('**响应状态码-' + KUtils.toString(resp.code, '') + '**:');
        createApiResponseSingleParam(resp, markdownCollections);
      })
    }
  }

}
/**
 * 单个响应状态
 * @param {*} resp 
 * @param {*} markdownCollections 
 */
function createApiResponseSingleParam(resp, markdownCollections) {
  //判断是否有响应Header
  createApiResponseHeaderParams(resp.responseHeaderParameters, markdownCollections);
  //数据
  markdownLines(markdownCollections);
  markdownCollections.push('**响应参数**:');
  markdownLines(markdownCollections);
  //拥有参数
  markdownCollections.push('| 参数名称 | 参数说明 | 类型 | schema |');
  markdownCollections.push('| -------- | -------- | ----- |----- | ');
  resp.data.forEach(function (param) {
    markdownCollections.push('|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.type, '') + '|' + KUtils.toString(param.schemaValue, '') + '|')
    deepMdTableByResponseParameter(param.children, markdownCollections);
  })
  //判断是否拥有响应示例
  markdownLines(markdownCollections);
  markdownCollections.push('**响应示例**:');
  if (resp.responseBasicType) {
    markdownCollections.push('```text');
    markdownCollections.push(resp.responseText);
    markdownCollections.push('```');
  } else {
    markdownCollections.push('```javascript');
    markdownCollections.push(resp.responseValue);
    markdownCollections.push('```');
  }

}


/**
 * 请求参数
 * @param {*} apiInfo 
 * @param {*} markdownCollections 
 */
function createApiRequestParameters(apiInfo, markdownCollections) {
  var data = [];
  if (apiInfo.parameters != null && apiInfo.parameters.length > 0) {
    data = data.concat(apiInfo.parameters);
  }
  if (
    apiInfo.refTreetableparameters != null &&
    apiInfo.refTreetableparameters.length > 0
  ) {
    apiInfo.refTreetableparameters.forEach(function (ref) {
      data = data.concat(ref.params);
    });
  }
  if (data != null) {
    data.sort(function (a, b) {
      return b.require - a.require;
    });
  }
  let reqParameters = [];
  if (data != null && data.length > 0) {
    data.forEach(function (md) {
      if (md.pid == '-1') {
        md.children = [];
        findModelChildren(md, data);
        //查找后如果没有,则将children置空
        if (md.children.length == 0) {
          md.children = null;
        }
        reqParameters.push(md);
      }
    });
  }
  markdownLines(markdownCollections);
  markdownCollections.push('**请求参数**:');
  //判断是否拥有请求参数
  if (reqParameters.length > 0) {
    markdownLines(markdownCollections);
    //拥有参数
    markdownCollections.push('| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |');
    markdownCollections.push('| -------- | -------- | ----- | -------- | -------- | ------ |');
    //级联表格，在表格需要最佳空格缩进符号
    deepMdTableByRequestParameter(reqParameters, markdownCollections);
  } else {
    markdownLines(markdownCollections);
    markdownCollections.push('暂无');
  }
}

/**
 *  递归循环遍历响应参数得到markdown表格
 * @param {*} parameters 
 * @param {*} markdownCollections 
 */
function deepMdTableByResponseParameter(parameters, markdownCollections) {
  if (parameters != null && parameters != undefined && parameters.length > 0) {
    parameters.forEach(function (param) {
      markdownCollections.push('|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.type, '') + '|' + KUtils.toString(param.schemaValue, '') + '|')
      deepMdTableByRequestParameter(param.children, markdownCollections);
    })
  }

}


/**
 * 递归循环遍历参数得到markdown表格
 * @param {*} parameters 
 * @param {*} markdownCollections 
 */
function deepMdTableByRequestParameter(parameters, markdownCollections) {
  if (parameters != null && parameters != undefined && parameters.length > 0) {
    parameters.forEach(function (param) {
      markdownCollections.push('|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.in, '') + '|' + KUtils.toString(param.require, '') + '|' + KUtils.toString(param.type, '') + '|' + KUtils.toString(param.schemaValue, '') + '|')
      deepMdTableByRequestParameter(param.children, markdownCollections);
    })
  }

}


/**
 * 根据参数级别获取名称
 * @param {*} param 
 */
function getMdTableByLevel(param) {
  var spaceArr = [];
  for (var i = 1; i < param.level; i++) {
    spaceArr.push('&emsp;&emsp;')
  }
  var tmpName = spaceArr.join('') + param.name;
  return tmpName;
}

/**
 * 递归遍历子元素
 * @param {*} md 
 * @param {*} modelData 
 */
function findModelChildren(md, modelData) {
  if (modelData != null && modelData != undefined && modelData.length > 0) {
    modelData.forEach(function (nmd) {
      if (nmd.pid == md.id) {
        nmd.children = [];
        findModelChildren(nmd, modelData);
        //查找后如果没有,则将children置空
        if (nmd.children.length == 0) {
          nmd.children = null;
        }
        md.children.push(nmd);
      }
    });
  }
}

/**
 * 响应参数递归遍历参数
 * @param {*} md 
 * @param {*} modelData 
 */
function findRespModelChildren(md, modelData) {
  if (modelData != null && modelData != undefined && modelData.length > 0) {
    modelData.forEach(function (nmd) {
      if (nmd.pid == md.id) {
        nmd.children = [];
        //本级level+1
        nmd.level = md.level + 1;
        findRespModelChildren(nmd, modelData);
        //查找后如果没有,则将children置空
        if (nmd.children.length == 0) {
          nmd.children = null;
        }
        md.children.push(nmd);
      }
    });
  }
}