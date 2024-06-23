let String = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                String = eval(String);
            } catch {
                String = "Error";
            }
            document.querySelector('input').value = String;
        } else if (e.target.innerHTML == 'C') {
            String = '';
            document.querySelector('input').value = String;
        } else {
            String += e.target.innerHTML;
            document.querySelector('input').value = String;
        }
    });
});
