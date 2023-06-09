window.addEventListener('DOMContentLoaded', ()=>{
    fetch('/inventory')
    .then (response => response.json())
    .then (data =>{
        document.getElementById('paddleboats').textContent=data.paddleboats;
        document.getElementById('singleKayaks').textContent=data.singleKayaks;
        document.getElementById('doubleKayaks').textContent=data.doubleKayaks;
        document.getElementById('canoes').textContent=data.canoes;
        document.getElementById('rowboats').textContent=data.rowboats;
        document.getElementById('paddleboards').textContent=data.paddleboards;
    })
    .catch(error=>{
        console.error('Error', error);
    })
});
