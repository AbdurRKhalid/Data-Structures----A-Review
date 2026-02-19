function recursiveMax(list) {
	    if(list.length == 1) {
	        return list[0]
		        }
	    if(list.length == 2) {
	        if (list[0] > list[1]){
	            return list[0]
			        } else {
	            return list[1]
					        }
		        }
	    const first = list.shift()
	    const max = recursiveMax(list)
	    return first > max ? first : max
}
				}
		}
	    }
	    }
}
