import Author from "./Author"
import BlogPost from "./BlogPost"
import Header from "./Header"
import Navigation from "./Navigation"
import Footer from './Footer'
function App(){
    return(
        <div>
            
            <Header/>
            <Navigation/>
            <BlogPost title="dfkfl" details="sdk"/>
             <BlogPost title="dfkfl" details="sdk"/>
             <Author author="Damir" author_details="dklm"/>
             <Footer/>
        </div>
    )
}

export default App