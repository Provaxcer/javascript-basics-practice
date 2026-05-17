let arr = []
let ID = 1

function create(req, res) {
    const data = req.body
    const dataobj = { id: ID, ...data }
    ID++
    arr.push(dataobj)
    res.status(201).json({
        message: 'Trade created',
        dataobj
    })
}

function getdata(req, res) {
    res.json(arr)
}

function deleteData(req, res) {
    const id = Number(req.params.id)
    arr = arr.filter(t => t.id !== id)

    res.json({ message: 'Trade deleted' })
}

function updateData(req, res) {
  const id = Number(req.params.id)
  const newData = req.body

  arr = arr.map(function(trade) {
    if (trade.id === id) {
      return { ...trade, ...newData }
    }
    return trade
  })

  res.json({ message: 'Trade updated' })
}

module.exports = { create, getdata, deleteData, updateData }