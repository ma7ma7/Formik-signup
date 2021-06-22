# Formik

Easy way to handle forms library for react and react native.

### Setup

#### Installation

```shell
npm install --save formik

// or

yarn add formik
```

#### Use

use formik as render props pattern using `Formik` component

```react
import { Formik, Form} from 'formik'

function SignUp () {
  return (
  	<Formik>
    	(formik) => {
        <Form>
        </Form>
      }
    </Formik>
  )
}
```

`formik => formik` is an object returned by Formik that can help use building forms and handles error and states
