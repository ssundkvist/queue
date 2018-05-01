module.exports = function (context, myQueueItem) {
  context.log('JavaScript queue trigger function processed work item:', myQueueItem);
  context.log(JSON.stringify(context))
  if(parseInt(context.bindingData.dequeueCount)< 3) {
    context.done("error " + parseInt(context.bindingData.dequeueCount))
  } else {
    context.done();
  }

};