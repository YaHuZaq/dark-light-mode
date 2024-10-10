let changeTheme = () =>{
   const body = document.body;
   body.classList.toggle('dark-mode');
   body.classList.toggle('light-mode');
    localStorage.setItem('mode', body.classList.contains('light-mode') ? 'dark' : 'light');
}

const savedMode = () =>{
    const lastMode = localStorage.getItem('mode');
    if(lastMode === 'dark'){
        document.body.classList.add('light-mode');
    }  else{
        document.body.classList.add('dark-mode');
    }
};
document.getElementById("theme").addEventListener('click', changeTheme);
window.onload = savedMode;

const showMe = () =>{
   document.getElementById('navs').style.display = 'flex';
   document.getElementById('can').style.display = 'flex';
   document.getElementById('ham').style.display = 'none';
};


const hideMe = () =>{
    document.getElementById('navs').style.display = 'none';
    document.getElementById('can').style.display = 'none';
    document.getElementById('ham').style.display = 'flex';
 };