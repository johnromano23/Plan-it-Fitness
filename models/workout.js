var orm = require("../config/orm.js");

var beginner = {
    all: function (cb) {
        orm.all("beginner", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("beginner", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("beginner", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("beginner", condition, function (res) {
            cb(res);
        });
    }
};
var intermediate = {
    all: function (cb) {
        orm.all("intermediate", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("intermediate", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("intermediate", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("intermediate", condition, function (res) {
            cb(res);
        });
    }
};
var advance = {
    all: function (cb) {
        orm.all("advance", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("advance", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("advance", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("advance", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = beginner, intermediate, advance;