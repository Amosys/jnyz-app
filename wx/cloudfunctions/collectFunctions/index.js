const getItem = require('./getItem/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getItem':
      return await getItem.main(event, context);
  }
};
