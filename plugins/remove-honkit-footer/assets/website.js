(function(){
  function nuke(){
    document.querySelectorAll('a.gitbook-link')
      .forEach(a => (a.closest('li') || a).remove());
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", nuke);
  else nuke();
  if (window.gitbook && gitbook.events){
    gitbook.events.bind("page.change", function(){ setTimeout(nuke, 0); });
  }
})();