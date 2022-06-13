import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();
    const startTime = new Date().getTime(); // 获取开始时间

    // make request
    const result = await createHttpRequest(app).get('/getData');
    const endTime = new Date().getTime(); // 获取截止时间

    // use expect by jest
    expect(endTime - startTime).toBeLessThan(1000);
    expect(result.text).toBe('//www.baidu.com/img/bd_logo1.png');

    // close app
    await close(app);

  });

});
