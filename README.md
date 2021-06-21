## Getting Started with redux-observable

### Rxjs
Imagine you work at an apple factory processing apples. 
	1.  You turn on the conveyor to start the stream. Apples are collected and dumped or emitted into the stream. 
	2. Each apple passes through a set of operations, such as cleaning, filtering or adding a label before it reaches you. 
	3. As an observer of this stream, you'll receive three types of notifications. 
		a. You're notified each time the next apple comes to you so you can process it. 
		b. If the machine jams, you're notified of it and the conveyor will stop so you can handle it. 
		c. When there are no more apples to process, you'll receive a notification that you're done for the day, 
		d. and if you need to leave before all apples are processed Shut down the conveyor before you go. Otherwise the stream will continue after you're gone Making quite a mess. 
If you have experience working with rxjs, you may have picked up on the message in this story. 

The stream is an observable. We can watch it as items are added or emitted to the stream.
We pipe the stream of apples through a set of operations. 
As each apple flows through, 
	1. we transform the apple by cleaning it, 
	2. filter it by quality or size, 
    3. process it by fixing a label on it

 