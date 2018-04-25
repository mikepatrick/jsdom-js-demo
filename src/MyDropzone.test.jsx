import * as React from 'react'
import { mount } from 'enzyme'
import Dropzone from 'react-dropzone'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyDropzone from './MyDropzone'

describe('DropzoneInput component', () => {
    it('Mounts', () => {
        configure({ adapter: new Adapter() })
        const comp = mount(<MyDropzone />)
        const dz = comp.find(Dropzone)
        const file = new File([''], 'testfile.jpg')
        console.log(document)
        dz.props().onDrop([file])
    })
})