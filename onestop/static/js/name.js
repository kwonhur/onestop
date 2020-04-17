const name = document.getElementById('name');
name.innerText = 'this is a very simple case';

if (module.hot){
    module.hot.accept();
}