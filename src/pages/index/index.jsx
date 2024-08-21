import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { AtAvatar } from 'taro-ui'
import './index.scss'
import Tabs from '../../components/tabs'

export default function Index() {

  const [isCanDraw, setCanDraw] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useLoad(() => {
    console.log('Page loaded.')
  })

  const onClose = () => {
    console.log('isClose')
    setCanDraw(!isCanDraw);
  }

  const getUserInfo = () => {
    Taro.getUserProfile({
      desc: "获取您的头像昵称信息",
      success: res => {
        setCanDraw(true);
        setUserInfo({
          avatarUrl: '',
          nickName: '121233'
        })
        console.log(res)
      },
      fail: err => {
        console.log(err)
        console.log(isCanDraw)
      }
    })
  }


  return (
    <View className='index'>
      <Text>Hello world!1</Text>
      <Button type='primary' onClick={getUserInfo}>Solid</Button>
      <Tabs />
      <AtAvatar circle text='凹凸实验室'></AtAvatar>
      <share-box isCanDraw={isCanDraw} userInfo={userInfo} initData={onClose} />
    </View>
  )
}
