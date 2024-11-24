(function () {
    const dayNightApp = {
        postElements: document.querySelectorAll('.post'),


        tumblerWrapperElement: document.querySelector('.tumbler__wrapper'),
        bodyElemnt: document.body,

        postElements: document.querySelectorAll('.post'),
        tumblerElement: document.querySelector('.tumbler'),

        clickEvent() {
            this.tumblerWrapperElement.addEventListener('click', (evt) => {

                this.bodyElemnt.setAttribute('class', 'body--night-mode');
                this.tumblerElement.setAttribute('class', 'tumbler--night-mode');
                for (const postElement of this.postElements) {
                    postElement.setAttribute('class', 'post--night-mode');
                }

            });
        },

        dblclickEvent() {
            this.tumblerWrapperElement.addEventListener('dblclick', () => {
                this.bodyElemnt.classList.remove('body--night-mode');
                this.tumblerElement.classList.remove('tumbler--night-mode');
                for (const postElement of this.postElements) {
                    postElement.classList.remove('post--night-mode');
                }
            });
        }
    }

    dayNightApp.clickEvent();
    dayNightApp.dblclickEvent();
})()