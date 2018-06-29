const { create } = require('stx')

const sMaster = create({
  route: [ '@', 'content', 'page1' ],
  content: {
    item1: {
      title: 'Item 1',
      description: 'Description of Item 1'
    },
    item2: {
      title: 'Item 2',
      description: 'Description of Item 2'
    },
    item3: {
      title: 'Item 3',
      description: 'Description of Item 3'
    },
    item4: {
      title: 'Item 4',
      description: 'Description of Item 4'
    },
    item5: {
      title: 'Item 5',
      description: 'Description of Item 5'
    },
    item6: {
      title: 'Item 6',
      description: 'Description of Item 6'
    },
    item7: {
      title: 'Item 7',
      description: 'Description of Item 7'
    },
    item8: {
      title: 'Item 8',
      description: 'Description of Item 8'
    },
    item9: {
      title: 'Item 9',
      description: 'Description of Item 9'
    },
    item10: {
      title: 'Item 10',
      description: 'Description of Item 10'
    },
    page1: {
      title: 'Page 1',
      items: {
        item1: [ '@', 'content', 'item1' ],
        item2: [ '@', 'content', 'item2' ],
        item6: [ '@', 'content', 'item6' ],
        item8: [ '@', 'content', 'item8' ],
        item10: [ '@', 'content', 'item10' ]
      }
    },
    page2: {
      title: 'Page 2',
      items: {
        item2: [ '@', 'content', 'item2' ],
        item3: [ '@', 'content', 'item3' ],
        item4: [ '@', 'content', 'item4' ],
        item5: [ '@', 'content', 'item5' ],
        item7: [ '@', 'content', 'item7' ]
      }
    },
    page3: {
      title: 'Page 3',
      items: {
        item1: [ '@', 'content', 'item1' ],
        item5: [ '@', 'content', 'item5' ],
        item6: [ '@', 'content', 'item6' ],
        item9: [ '@', 'content', 'item9' ],
        item10: [ '@', 'content', 'item10' ]
      }
    },
    page4: {
      title: 'Page 4',
      items: {
        item3: [ '@', 'content', 'item3' ],
        item4: [ '@', 'content', 'item4' ],
        item5: [ '@', 'content', 'item5' ],
        item7: [ '@', 'content', 'item7' ],
        item8: [ '@', 'content', 'item8' ]
      }
    },
    menu: {
      page1: [ '@', 'content', 'page1' ],
      page2: [ '@', 'content', 'page2' ],
      page3: [ '@', 'content', 'page3' ],
      page4: [ '@', 'content', 'page4' ]
    }
  }
})

const updateRoute = (val, _, item) => {
  item.set([ '@', 'content', val ])
}

const toggleFavourite = (val, _, item) => {
  const favourite = item.get([ val, 'favourite'], false)
  favourite.set(!favourite.compute())
}

sMaster.branch.branchListeners = branch => {
  branch.get('route').on('update', updateRoute)
  branch.get('content').on('toggleFavourite', toggleFavourite)
}

const server = sMaster.listen(7071)
server.switchBranch = (fromBranch, branchKey, switcher) => switcher(branchKey)
