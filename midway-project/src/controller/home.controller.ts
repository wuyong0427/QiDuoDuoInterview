import { Controller, Get } from '@midwayjs/decorator';
import * as https from "https";

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Get('/getData')
  async getImg(): Promise<string> {
    let filterData = (data)=>{
      // console.log('整个页面',data);
      const lgDivReg = /<div.*?id=["']lg["'].*?>(.*?)<\/div>/;
      const imgSrcReg = /.*?src=['"](.*?)["'].*?/;

      const lgDiv = data.match(lgDivReg, '')[1];
      const imgSrc = lgDiv.match(imgSrcReg, '')[1];

      // 打印 Img src
      console.log('imgSrc=', imgSrc);
    }
    https.get('https://www.baidu.com/',(result)=>{
        let data = ''
        result.on('data',(chunk)=>{
            data+=chunk
        })
        result.on('end',()=>{
            filterData(data)
        })
    })

    return 'Hello Midwayjs!';
  }

}
