function nextGen(){
	calcFitness();

	for(i=0;i<total;i++){
		birds[i]=pickOne();
	}
	savedBirds=[];
}

function calcFitness(){
	let sum=0;
	for(i=0;i<savedBirds.length;i++){
		sum+=savedBirds[i].score;
	}
	for(i=0;i<savedBirds.length;i++){
		savedBirds[i].fitness=savedBirds[i].score/sum;
	}
}

function pickOne(){
	var i=0;
	var r=random(1);
	while(r>0){
		r=r-savedBirds[i].fitness;
		i++;
	}
	i--;
	let newBird=savedBirds[i];
	let child=new Bird(newBird.brain)
	child.mutate();
	return child;
}