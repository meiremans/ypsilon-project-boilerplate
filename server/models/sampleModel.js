const y = require('ypsilon');


const SampleSchema = y.schema('sample', {
    //this is a mongoose object
    sampleData : Number,
});

module.exports = SampleSchema;