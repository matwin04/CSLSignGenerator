document.getElementById('stationName').addEventListener('input',function (){
    document.getElementById('stationText').textContent = this.value || 'stationName';
});
document.getElementById('lineName').addEventListener('input',function(){
    document.getElementById('lineText').textContent = this.value || 'lineName';
});
document.getElementById('destName').addEventListener('input',function(){
    document.getElementById('destText').textContent = this.value || 'destName';
});