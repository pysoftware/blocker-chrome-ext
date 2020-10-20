console.log('1111111111');
chrome.tabs.onAttached.addListener(() => {
  console.log(111111111111);
});
chrome.tabs.onAttached.addListener('complete', () => {
  console.log(1111)
})