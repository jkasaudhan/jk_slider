function JKSlider(containerID) {
    this.container = document.getElementById(containerID) || '';
    this.slides = this.container.querySelectorAll('.slide');
    this.totalSlides = this.slides.length -1;
    this.currentSlide = 0;

    //Show first slide by default
    this.slide(this.currentSlide);
}

JKSlider.prototype.slide = function(index) {
    if(index < 0 || index > this.totalSlides) {
        alert('Cannot find slider item with index: ' + index);
    } else {
        for(var i = 0; i < this.slides.length ; i++) {
            if(i === index) {
                this.slides[i].classList.add('active');
                this.slides[i].style.display = 'inline-block';
            }else {
                this.slides[i].classList.remove('active');
                this.slides[i].style.display = 'none';
            }
        }
    }
}

JKSlider.prototype.next = function() {
    (this.currentSlide >= this.totalSlides) ? this.currentSlide = 0: this.currentSlide += 1;
    this.slide(this.currentSlide);

}

JKSlider.prototype.prev = function() {
    (this.currentSlide <= 0 ) ? this.currentSlide = this.totalSlides : this.currentSlide -= 1;
    this.slide(this.currentSlide);
}


