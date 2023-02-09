import { Header } from "../header/Header";
import Filter from "../filter/Filter";
import React, { useEffect, useState } from "react"
import { MainContent } from "../main/MainContent";
import { Loading } from "../loading/Loading";
import "./App.css";

const App = () => {

  const [data, setData] = useState(null)
  const [searchValue, setSearchValue] = useState("") 
  const [selectTitle, setSelectTitle] = useState("Filter by Region")
  const [changeTitle, setChangeTitle] = useState("All")
  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(!theme)
    document.body.classList.toggle("dark-theme")  
  }

  useEffect(() => {
    getUrl()
  }, [])

  const getUrl = () => {
    fetch(`https://restcountries.com/v2/all?fields=name,capital,region,population,flags`)
      .then(res => res.json())
      .then(setData)
  }

  const searchItems = (str) => {
    setSearchValue(str)
  }

  const inputChangeValue = (sel) => {
    setChangeTitle(sel)
    setSelectTitle(sel)
  }

  const onSelectItems = () => {
    switch(changeTitle){
      case 'Europe': 
        return data.filter(item => item.region === 'Europe')
      case 'Asia': 
        return data.filter(item => item.region === 'Asia')
      case 'Africa': 
        return data.filter(item => item.region === 'Africa')
      case 'Americas': 
        return data.filter(item => item.region === 'Americas')
      case 'Oceania': 
        return data.filter(item => item.region === 'Oceania')
      case 'Polar': 
        return data.filter(item => item.region === 'Polar')
      default: 
        return data
    }
  }

  const render = () => {
    if(data){
      let filterData = onSelectItems().filter((item) => item.name.includes(searchValue))
      return(
        <div className="App">
          <Header changeTheme={changeTheme} theme={theme}/>
          <div className="container">
            <Filter searchItems={searchItems} inputChangeValue={inputChangeValue} selectTitle={selectTitle} theme={theme}/>
            {filterData ? <MainContent data={filterData} theme={theme}/> : <Loading />}
          </div>
        </div>
      )
    }else{
      return <Loading />
    }
  }

  return (
    render()
  )
}

export default App;
