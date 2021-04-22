
class Tracker {
  total = 0
  queue = []
// queueItem is object with two fields:
// {
//   ts: 0,
//   total: 0 
// }
interval = 0
  limit = 0
  
  constructor(interval, limit) {
    this.interval = interval
    this.limit = limit
  }

  add(ts) {
    while(this.queue.length > 0 && (ts - this.queue[0].ts > this.interval-1)) {
      // console.log(`Remove head: ${this.queue}, decrement total: ${this.total}`)
      this.total -= this.queue[0].total
      this.queue.shift()
      // console.log(`After: ${this.queue}, total: ${this.total}`)
    }

    if (this.queue.length > 0 && this.queue[this.queue.length-1].ts === ts) {
      this.queue[this.queue.length-1].total++
    }
    else {
      this.queue.push(
        {
          ts: ts,
          total: 1
        }
      )
    }
    this.total++
  }

  get exceeded() {
    return this.total > this.limit
  }

  get logmessage() {
    return `At most ${this.limit} equests are allowed in ${this.interval} second(s)`;
  }
}

// let requestTime=[1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11]
// let requestTime=[1,1,1,1,2]
module.exports = function droppedRequests(requestTime, verbose) {
  let trackers=[
    new Tracker(1, 3),
    new Tracker(10, 20),
    new Tracker(60, 60)
  ]

  let droppedNum = 0
  for (const ts of requestTime) {
    let dropped = false
    trackers.forEach((tracker) => {
      tracker.add(ts)
      if (!dropped && tracker.exceeded) {
        if (verbose) console.log(`Request ${ts} - Dropped. `, tracker.logmessage)
        dropped = true
        droppedNum++
      }
    })
    if (!dropped && verbose) {
      console.log(`Request ${ts} - Not dropped`)
    }
  }

  if (verbose) {
    console.log(droppedNum)
  }

  return droppedNum
}