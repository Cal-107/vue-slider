// Descrizione:
// Partendo dalla struttura base, allegata sotto, rifare l’esercizio dello slider come fatto insieme in classe.
// In allegato con la base con HTML e CSS trovate anche un file con i dati necessari per lo slider.
// Bonus
// Applicare l’autoplay allo slider: ogni 3 secondi cambia immagine automaticamente.

/*
 * Vue Slider
 */

const app = new Vue(
    {
        // imposto l'autoplay utilizzando la funzione già creata ( nextClick() )
        created() {
            setInterval(() => {
                this.nextClick()
            }, 3000);
        },
        el: '#root',
        data: {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Maldive',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                },
            ],
            // Creo un contatore per l'indice dove definire la classe active
            activeSlide: 0,
        },
        // Creo la sezione delle funzioni per i click
        methods: {
            // next click
            nextClick() {
                this.activeSlide++;

                if (this.activeSlide > this.slides.length - 1) {
                    this.activeSlide = 0;
                }
            },
            // prev click
            prevClick() {
                this.activeSlide--;
                
                if (this.activeSlide < 0) {
                    this.activeSlide = this.slides.length - 1;
                }
            },
            // click su thumbs
            thumbClick(index) {
                this.activeSlide = index;
            }
        },
    }
);
