export default function headerScript(header) {
    header.querySelector('p').addEventListener('click', () => {
      alert('Клик')
    });
  }