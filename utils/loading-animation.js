const showAnimation = () => {
    const loading = document.querySelector('.loading-animation');
    loading.style.display = 'block';
}

const hiddeAnimation = () => {
    const loading = document.querySelector('.loading-animation');
    loading.style.display = 'none';
}

export {showAnimation, hiddeAnimation};