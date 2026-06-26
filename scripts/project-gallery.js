import '../styles/project-gallery.css';

const projects = [
  {
    title: 'VGA Controller',
    image: 'images/under-construction-warning.jpg',
    github: 'https://github.com/cdi-sjsu',
    description: 'Verilog display timing project for sync pulses, pixel counters, and video experiments. This card is a placeholder while the repo gets cleaned up with diagrams, waveforms, and a small demo path.',
  },
  {
    title: '8-bit Password Detector',
    image: 'images/under-construction-warning.jpg',
    github: 'https://github.com/nicojeda189/CDI-Beginner-Workshops/tree/main/8-bitPasswordComparator',
    description: 'Shift comparator project turning into an 8-bit password detector. A keypad or MCU enters a value from 0-255, the design converts/checks the binary pattern, then reports whether the password matched.',
  },
];

const gallery = document.querySelector('[data-project-gallery]');

if (gallery) {
  const screenImage = gallery.querySelector('[data-project-image]');
  const title = gallery.querySelector('[data-project-title]');
  const description = gallery.querySelector('[data-project-description]');
  const github = gallery.querySelector('[data-project-github]');
  const count = gallery.querySelector('[data-project-count]');
  const backButton = gallery.querySelector('[data-project-back]');
  const nextButton = gallery.querySelector('[data-project-next]');

  let currentProject = 0;

  function showProject(projectNumber) {
    currentProject = (projectNumber + projects.length) % projects.length;
    const project = projects[currentProject];

    screenImage.src = project.image;
    screenImage.alt = `${project.title} preview`;
    title.textContent = project.title;
    description.textContent = project.description;
    github.href = project.github;
    count.textContent = `PROJECT ${String(currentProject + 1).padStart(2, '0')}`;
  }

  backButton.addEventListener('click', () => showProject(currentProject - 1));
  nextButton.addEventListener('click', () => showProject(currentProject + 1));

  showProject(0);
}
