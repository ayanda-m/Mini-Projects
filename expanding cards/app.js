const panels = document.querySelectorAll('.container div');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        const remove = () => {
            panels.forEach(panel => {
                panel.classList.remove('active');
            })


        }
        remove();
        panel.classList.add('active');
    })
})