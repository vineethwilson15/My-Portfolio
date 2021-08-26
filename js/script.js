var audioe = new Audio("https://wapking.asia/files/download/type/128/id/37853");
function play()
{
    if(audioe.paused)
    {
        audioe.play();
        audioe.loop=true;
    }
    else
    {
        audioe.pause();
    }
}

window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#fff',
      maxParticles: 130,
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 80
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 50
          }
        }
      ]
    });
  };