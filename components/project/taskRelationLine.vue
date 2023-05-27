<template>
    <g>
      <circle r="5" :cx="next.x1" :cy="next.y1" class="nextTaskRelation" style="fill:yellow" />
      <defs>
        <marker id="Triangle" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="3" markerHeight="3" orient="auto" fill="#2a602c">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <polyline  :points="next.points" class="nextTaskRelation" marker-end="url(#Triangle)" />
<!--      <circle  r="5" :cx="props.next.coordinate.x2" :cy="props.next.coordinate.y2+15" class="nextTaskRelation" style="fill:yellow" />-->
    </g>

</template>

<script setup>
const props = defineProps(['next','bWidth','moveX']);


const next=computed({
  get:()=>{
    return convertCord(props.next.coordinate,-props.moveX);
  }
});


function convertCord(next,X){
  let x1 = next.x1-9-X;
  let y1 = next.y1;
  let x2 = next.x2+9-X;
  let y2 = next.y2+y1;


  let points= x1+","+y1+" ";
  points += ((x1+x2)/2)+","+y1+" ";
  points += ((x1+x2)/2)+","+y2+" ";
  points += x2+","+y2;


  return {
    points: points,
    cx:x2,
    cy:y2,
    x1:x1,
    y1:y1
  }
}





</script>

<style scoped>
polyline{
  fill: none;
  stroke: darkorange;
  stroke-width: 5px;
}
g>circle {
  transition: cx 100ms ease-in-out;
}
g> polyline{
  transition: points 100ms ease-in-out;
}


</style>