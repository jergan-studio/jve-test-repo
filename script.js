function sayHello(){
  alert("Hello from JS in deployed site!");
}

document.getElementById("btn").onclick = function(){
  // Call JVE event if needed
  if(window.JVE) JVE.trigger("click");
  sayHello();
};
const DEPLOY_KEY = "mysecretkey123";  // <-- your deployment key

function deployProject(){
  const key = document.getElementById("deployKey").value;
  const folder = document.getElementById("folderName").value;
  const status = document.getElementById("deployStatus");

  if(key !== DEPLOY_KEY){
    status.textContent = "❌ Invalid deployment key!";
    return;
  }

  if(!folder){
    status.textContent = "❌ Enter a folder name!";
    return;
  }

  status.textContent = "🚀 Deploying " + folder + "...";

  setTimeout(()=>{
    status.textContent = "✅ Deployment complete! Visit c.html?folder=" + folder;
  },1500);
}
