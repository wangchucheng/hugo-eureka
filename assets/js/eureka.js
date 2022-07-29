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
                let element = document.querySelector(`.sticky-toc li a[href="#${id}"]`)
                if (element) {
                    element.parentElement.classList.add('active');
                    updatePosAndColor();
                }
            } else {
                if (document.querySelectorAll('.sticky-toc li.active').length == 1) {
                    delay = true;
                } else {
                    let element = document.querySelector(`.sticky-toc li a[href="#${id}"]`)
                    if (element) {
                        element.classList.remove(textColor);
                        element.parentElement.classList.remove('active');
                        updatePosAndColor();
                    }
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
                document.querySelector(`.sticky-toc`).style.top = `calc( 8rem - ${offset}px)`
            } else {
                document.querySelector(`.sticky-toc`).removeAttribute("style");
            }
            for (let i = 1; i < len; i++) {
                elements[i].firstChild.classList.remove(textColor)
            }
        }
    }

    // Track all sections that have an `id` applied
    document.querySelectorAll('.prose h1[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h2[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h3[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h4[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h5[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h6[id]').forEach((section) => {
        observer.observe(section);
    });
}

//Masonry Layout
function enableMasonry() {
    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);
    var imgs = document.getElementsByTagName('img');
    for (let img of imgs) {
        imgLoad(img, resizeAllGridItems())
    }
}

function imgLoad(img, callback) {
    var timer = setInterval(function () {
        if (img.complete) {
            resizeAllGridItems()
            clearInterval(timer)
        }
    }, 50)
}

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

//color components/schema
function getcolorscheme() {
    let storageColorScheme = localStorage.getItem("lightDarkMode")
    let element = document.getElementById('lightDarkMode');
    let targetDiv = document.getElementById('lightDarkOptions');
    let targets = targetDiv.getElementsByTagName('span');
    let screen = document.getElementById('is-open');

    element.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden')
        screen.classList.toggle('hidden')
    })

    for (let target of targets) {
        target.addEventListener('click', () => {
            let targetName = target.getAttribute("name")
            let icon = switchMode(targetName)
            let old_icon = element.firstElementChild.getAttribute("data-icon")
            element.firstElementChild.setAttribute("data-icon", icon)
            element.firstElementChild.classList.remove('fa-' + old_icon)
            element.firstElementChild.classList.add('fa-' + icon)

            localStorage.setItem("lightDarkMode", targetName)

            targetDiv.classList.toggle('hidden')
            screen.classList.toggle('hidden')
        })
    }
    screen.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden')
        screen.classList.toggle('hidden')
    })

}

{{/*  Utterances  */}}
{{/*  Deprecation warning(v1.0.0) starts */}}
{{- $commentHandler := .Site.Params.comment.handler | default .Site.Params.comment.platform }}
{{/*  Deprecation warning(v1.0.0) ends  */}}
{{ $enableUtterances := and (eq $commentHandler "utterances") (eq .Site.Params.comment.utterances.theme "eureka") }}
{{- if $enableUtterances }}
function switchUtterancesTheme(theme) {
    try {
        const message = {
            type: 'set-theme',
            theme: theme,
          };
        const utterances = document.querySelector('iframe').contentWindow; // try event.source instead
        utterances.postMessage(message, 'https://utteranc.es');
    } catch {}
}
{{- end }}

function switchMode(mode) {
    let icon = ''
    switch (mode) {
        case 'Light':
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', switchDarkMode)
            icon = 'sun'
            document.getElementsByTagName('html')[0].classList.remove('dark')
            {{/*  Utterances  */}}
            {{- if $enableUtterances }}
            switchUtterancesTheme('github-light')
            {{- end }}
            break
        case 'Dark':
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', switchDarkMode)
            icon = 'moon'
            document.getElementsByTagName('html')[0].classList.add('dark')
            {{/*  Utterances  */}}
            {{- if $enableUtterances }}
            switchUtterancesTheme('github-dark')
            {{- end }}
            break
        case 'Auto':
            icon = 'adjust'
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
            switchDarkMode(isDarkMode)
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', switchDarkMode)
            break
    }
    return icon
}

function switchDarkMode(e) {
    if (e.matches) {
        document.getElementsByTagName('html')[0].classList.add('dark')
        {{/*  Utterances  */}}
        {{- if $enableUtterances }}
        switchUtterancesTheme('github-dark')
        {{- end }}
    } else {
        document.getElementsByTagName('html')[0].classList.remove('dark')
        {{/*  Utterances  */}}
        {{- if $enableUtterances }}
        switchUtterancesTheme('github-light')
        {{- end }}
    }
}

//switch burger
function switchBurger() {
    let element = document.getElementById('navbar-btn');
    let screen = document.getElementById('is-open-mobile');
    let target = document.getElementById('target');
    element.addEventListener('click', () => {
        target.classList.toggle('hidden');
        screen.classList.toggle('hidden')
    })
    screen.addEventListener('click', () => {
        target.classList.toggle('hidden')
        screen.classList.toggle('hidden')
    })
}

//switch language
function switchLanguage() {
    let element = document.getElementById('languageMode');
    let targetDiv = document.getElementById('languageOptions');
    let targets = targetDiv.getElementsByTagName('a')
    let screen = document.getElementById('is-open-lang');

    element.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden');
        screen.classList.toggle('hidden')
    })

    for (let target of targets) {
        target.addEventListener('click', () => {
            targetDiv.classList.toggle('hidden')
            screen.classList.toggle('hidden')
        })
    }
    screen.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden')
        screen.classList.toggle('hidden')
    })
}

//switch doc toc
function switchDocToc() {
    let element = document.getElementById('sidebar-title');
    let target = document.getElementById('sidebar-toc');
    element.addEventListener('click', () => {
        target.classList.toggle('hidden');
        element.lastElementChild.classList.toggle('fa-caret-right');
        element.lastElementChild.classList.toggle('fa-caret-down');
    })
}

//change sidebar height
function changeSidebarHeight() {
    let element = document.getElementById('sidebar-title');
    let target = document.getElementById('sidebar-toc');
    target.style.setProperty('--height-doc-title', `${element.offsetHeight}px`);
}

//switch doc version
function switchDocVersion() {
    let element = document.getElementById('doc-version');
    let targetDiv = document.getElementById('version-options');
    let targets = targetDiv.getElementsByTagName('a')
    let screen = document.getElementById('switch-canvas');

    element.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden');
        screen.classList.toggle('hidden');
        element.lastElementChild.classList.toggle('fa-caret-right');
        element.lastElementChild.classList.toggle('fa-caret-down');
    })

    for (let target of targets) {
        target.addEventListener('click', () => {
            targetDiv.classList.toggle('hidden')
            screen.classList.toggle('hidden')
        })
    }
    screen.addEventListener('click', () => {
        targetDiv.classList.toggle('hidden')
        screen.classList.toggle('hidden')
        element.lastElementChild.classList.toggle('fa-caret-right');
        element.lastElementChild.classList.toggle('fa-caret-down');
    })
}
