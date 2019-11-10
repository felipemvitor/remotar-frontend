import { Container } from "react-bootstrap"
import { Switch, Route } from 'react-router-dom'
import App from "./App"

const Routes = () => {
    <main>
        <Container>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
            </Switch>
        </Container>
    </main>
        }