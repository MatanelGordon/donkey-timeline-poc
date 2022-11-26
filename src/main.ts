import './reset.scss'
import './style.css'
import {run} from './Timeline';

const app = document.querySelector<HTMLDivElement>('#app')!
run(app);