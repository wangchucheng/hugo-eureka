function enableStickyToc() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                if (delay == true) {
                    let element = document.querySelector('.sticky-toc li.active')
                    element.firstChild.classList.remove(textColor);
                    element.classList.remove('active');
                    delay = false;
                    updatePosAndColor();
                }
                document.querySelector(`.sticky-toc li a[href="#${id}"]`).parentElement.classList.add('active');
                updatePosAndColor();
            } else {
                if (document.querySelectorAll('.sticky-toc li.active').length == 1) {
                    delay = true;
                } else {
                    let element = document.querySelector(`.sticky-toc li a[href="#${id}"]`)
                    element.classList.remove(textColor);
                    element.parentElement.classList.remove('active');
                    updatePosAndColor();
                }
            }
        });
    });

    var delay = false;
    var targetPos = window.innerHeight * 0.4
    var textColor = 'text-eureka'

    function updatePosAndColor() {
        let elements = document.querySelectorAll('.sticky-toc li.active')
        let len = elements.length
        if (len != 0) {
            let firstElement = elements[0]
            firstElement.firstChild.classList.add(textColor)
            let offset = firstElement.offsetTop - targetPos;
            if (offset > 0) {
                document.querySelector(`.sticky-toc`).style.top = `calc( 7rem - ${offset}px)`
            } else {
                document.querySelector(`.sticky-toc`).removeAttribute("style");
            }
            for (let i = 1; i < len; i++) {
                elements[i].firstChild.classList.remove(textColor)
            }
        }
    }

    // Track all sections that have an `id` applied
    document.querySelectorAll('.content h1[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.content h2[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.content h3[id]').forEach((section) => {
        observer.observe(section);
    });

    document.querySelectorAll('.content h4[id]').forEach((section) => {
        observer.observe(section);
    });

    document.querySelectorAll('.content h5[id]').forEach((section) => {
        observer.observe(section);
    });

    document.querySelectorAll('.content h6[id]').forEach((section) => {
        observer.observe(section);
    });
}

//Masonry Layout
function resizeGridItem(item) {
    grid = document.getElementsByClassName("masonry")[0];
    rowHeight = 0;
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.grid-content').getBoundingClientRect().height) / rowGap);
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("item");
    for (x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
}