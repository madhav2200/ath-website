const scriptURL = 'https://script.google.com/macros/s/AKfycbx7ovcHFpOvPMF9nEh6rtN67WF2_bVcdhN_8nsLk8RW5YAFc3NDrcMDEUouKb1k7io/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	.then(response => alert("Thank you! your form is submitted successfully." )) .then(() => { window.location.reload(); })
	.catch(error => console.error('Error!', error.message))
})
