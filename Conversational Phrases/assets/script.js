const render = () => {

  const audio = document.getElementById('audio');
  const tbody = document.querySelector('tbody');

  data.forEach(phrase => {

    const html = `<tr data-start=${phrase.start} data-end=${phrase.end}>
      <td class=play><img src=assets/play.svg alt='play this phrase'></td>
      <td lang=mix>${phrase.mix}</td>
      <td lang=spa>${phrase.spa}</td>
      <td lang=eng>${phrase.eng}</td>
    </tr>`;

    tbody.insertAdjacentHTML('beforeend', html);

  });

  const play = ev => {
    audio.pause();
    const start = ev.target.tagName === 'IMG' ? ev.target.parentNode.parentNode.dataset.start : ev.target.parentNode.dataset.start;
    const end = ev.target.tagName === 'IMG' ? ev.target.parentNode.parentNode.dataset.end : ev.target.parentNode.dataset.end;
    audio.src = `data/Tlhp-032-Conversational_phrases_16_bit.wav#t=${start},${end}`;
    audio.play();
  };

  tbody.addEventListener('click', play);

};

window.addEventListener('load', render);
