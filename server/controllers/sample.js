const getSample = (req,res, next )=> {
  res.sendResponse('ok');
  next()
};

module.exports = {
    getSample
};