import { Model, createKey } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  const rootKey = createKey();

  return Model.create({"rootTopicKey":"b2603cf0-42b6-4b90-a2d7-6cbcd7ff0f74","editorRootTopicKey":"b2603cf0-42b6-4b90-a2d7-6cbcd7ff0f74","focusKey":"2e03713a-57d5-4553-a505-62559d2f687e","extData":{},"topics":[{"key":"b2603cf0-42b6-4b90-a2d7-6cbcd7ff0f74","parentKey":null,"subKeys":["2e03713a-57d5-4553-a505-62559d2f687e"],"collapse":false,"style":null,"blocks":[{"type":"CONTENT","data":"Document"}]},{"key":"25f55c1d-eadd-4a90-be5f-a82b3bf6c080","parentKey":"b2603cf0-42b6-4b90-a2d7-6cbcd7ff0f74","subKeys":[],"collapse":false,"style":null,"blocks":[{"type":"CONTENT","data":"在原生的JavaScript程序中，我们直接对DOM进行创建和更改，\n而DOM元素通过我们监听的事件和我们的应用程序进行通讯。\n而React会先将你的代码转换成一个JavaScript对象，\n然后这个JavaScript对象再转换成真实DOM。这个JavaScript对象就是所谓的虚拟DOM。"}]},{"key":"2e03713a-57d5-4553-a505-62559d2f687e","parentKey":"b2603cf0-42b6-4b90-a2d7-6cbcd7ff0f74","subKeys":[],"collapse":false,"style":null,"blocks":[{"type":"CONTENT","data":""}]}],"config":{"readOnly":false,"allowUndo":true,"layoutDir":2,"theme":{"name":"default","randomColor":true,"background":"rgb(57,60,65)","highlightColor":"#50C9CE","marginH":60,"marginV":20,"contentStyle":{"lineHeight":"1.5"},"linkStyle":{"lineRadius":5,"lineType":"curve","lineWidth":"3px"},"rootTopic":{"contentStyle":{"fontSize":"34px","borderRadius":"35px","padding":"16px 18px 16px 18px"},"subLinkStyle":{"lineType":"curve","lineWidth":"3px","lineColor":"rgb(113, 203, 45)"}},"primaryTopic":{"contentStyle":{"borderWidth":"1px","borderStyle":"solid","borderRadius":"20px","fontSize":"17px","padding":"10px 15px 10px 15px"},"subLinkStyle":{"lineType":"curve","lineWidth":"3px","lineColor":"rgb(113, 203, 45)"}},"normalTopic":{"contentStyle":{"border":"1px solid #e8eaec","borderRadius":"20px","fontSize":"17px","padding":"4px 10px"},"subLinkStyle":{"lineType":"curve","lineWidth":"3px","lineColor":"white"}}}},"formatVersion":null});
}
