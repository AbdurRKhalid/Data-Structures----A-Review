function recursive_count(list) {
	    if (list.length == 0) {
	        return 0
		        }
	    list.shift()
	    return 1 + recursive_count(list)
}
	    }
}
