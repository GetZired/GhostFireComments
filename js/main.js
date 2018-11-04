import FirebaseIni from '../components/FirebaseIni'
import LoadComments from '../components/LoadComments'
import RenderMainLayout from '../components/RenderMainLayout'

// initialize firebase
FirebaseIni()

// Render MainLayout in DOM
RenderMainLayout()

// Load all comments
LoadComments()
