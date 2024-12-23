const steps = document.querySelectorAll('.form-step');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
    });
    btnPrev.disabled = stepIndex === 0;
    btnNext.textContent = stepIndex === steps.length - 1 ? 'Submit' : 'Next';
}

function validateStep() {
    const activeStep = steps[currentStep];
    const input = activeStep.querySelector('input');
    const errorSpan = activeStep.querySelector('.error');

    if (input.checkValidity()) {
        errorSpan.textContent = '';
        return true;
    } else {
        errorSpan.textContent = 'Please fill out this field correctly.';
        return false;
    }
}
btnNext.addEventListener('click', () => {
    if (validateStep()) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert('Form submitted successfully!');
            document.getElementById('multiStepForm').reset();
            currentStep = 0;
            showStep(currentStep);
        }
    }
});

btnPrev.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

showStep(currentStep);