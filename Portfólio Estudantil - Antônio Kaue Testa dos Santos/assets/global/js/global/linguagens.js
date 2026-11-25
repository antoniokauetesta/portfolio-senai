document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip-box';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  document.querySelectorAll('.skill-tag[data-tooltip]').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tooltip.textContent = tag.dataset.tooltip;
      tooltip.style.display = 'block';
    });
    tag.addEventListener('mousemove', e => {
      const w = tooltip.offsetWidth;
      let x = e.clientX + 14;
      if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
      tooltip.style.left = x + 'px';
      tooltip.style.top = (e.clientY + 14) + 'px';
    });
    tag.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
});