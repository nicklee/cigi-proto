const allItems = Array.from(document.getElementsByClassName("item"));

function resizeGridItem(item){
   const grid = document.getElementsByClassName("grid")[0];
   const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
   const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
   const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
   item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){

   allItems.forEach((item) => {
       resizeGridItem(item);
   })

}

window.onload = resizeAllGridItems();

function resizeInstance(instance){
   item = instance.elements[0];
   resizeGridItem(item);
}
