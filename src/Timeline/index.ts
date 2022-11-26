import { color, select } from "d3";

export function run(container: HTMLElement) {
  select(container)
    .append("div")
    .text("Hello world!")
    .on('click', function (){
        select(this).style('color', 'black');
    })
    .append('div')
    

  select(window).on("click", function (e: MouseEvent) {
    const x = e.clientX % 256;
    const y = e.clientY % 256;
    console.log(`clicked`, `rgb(${x}, ${y}, ${(x + y) / 2 | 0 })`);
    
    select(container).style('color', `rgb(${x}, ${y}, ${(x + y) / 2 | 0 })`);
  });
}
