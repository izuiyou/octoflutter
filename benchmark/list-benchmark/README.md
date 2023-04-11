## octoflutter list benchmark

### When the list length is 200

<img src="./screenshot/list_200.jpg" width = 200 >  <img src="./screenshot/octo_200.jpg" width = 200>

### When the list length is 1000

<img src="./screenshot/list_1000.jpg" width = 200 >  <img src="./screenshot/octo_1000.jpg" width = 200>

### When the list length is 2000

<img src="./screenshot/list_2000.jpg" width = 200 >  <img src="./screenshot/octo_2000.jpg" width = 200>

### When the list length is 4000
<img src="./screenshot/list_4000.jpg" width = 200 >  <img src="./screenshot/octo_4000.jpg" width = 200>


### Conclusion

Generally speaking, when the list length is small, OctoListView has less jank frame then ListView, and the longest time cost is smaller then ListView. When the list length come to 4000, even though the longest time cost is smaller then ListView, the jank frame is more then ListView. You should do some test based on your usage scenarios to decide to use ListView or OctoListView.