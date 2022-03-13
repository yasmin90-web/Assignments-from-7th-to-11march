 let sec = 60;
        let min = 4;
        const simplest_fn = function() {
            const seconds = document.getElementById('sec');
            seconds.innerText = `${sec}s`;
            sec -= 1;
            const minutes = document.getElementById('min');
            minutes.innerText = `${min}m`;

            if (sec < 0) {
                min -= 1;
                if (min < 0) {
                    clearInterval(intervalN_id);
                }
                sec = 3;
                //clearInterval(interval_id2);
            }
        }
        const intervalN_id = setInterval(simplest_fn, 1000);
        const stop = function() {
            clearInterval(intervalN_id);
        }
        const stop_btn = document.getElementById('stop');
        stop_btn.addEventListener('click', stop);


        const fn = function() {
            sec = 60;
            min = 4;
            const seconds = document.getElementById('sec');
            seconds.innerText = `${sec}s`;
            const minutes = document.getElementById('min');
            minutes.innerText = `${min}m`;
        }
        const reset_btn = document.getElementById('reset');
        reset_btn.addEventListener('click', fn);
