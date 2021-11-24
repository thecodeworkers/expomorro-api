'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async sendmail(ctx) {
    const data = ctx?.request?.body
    const form = await strapi.query('forms').findOne({ name: data?.name }, ['name', 'Datos'])
    const formData = form?.Datos

    const mailData = data?.data

    const sendData = mailData.reduce((prev, next) => {
      const input = formData.find((inputData) => inputData?.name === next?.name)
      prev[input?.placeholder] = next?.value
      return prev
    }, {})

    const arrayKeys = Object.keys(sendData)

    const emailTemplate = {
      subject: form?.name,
      text: `Correo enviado por ${form?.name}`,
      html: arrayKeys.reduce((prev, next, index) => {
        if (index === 0) prev = '<div>'
        prev += `<p>${next}: ${sendData[next]}</p>`
        if (index + 1 === arrayKeys.length) prev += '</div>'
        return prev
      }
        , ''),
    }

    await strapi.plugins.email.services.email.sendTemplatedEmail({ to: 'developer@thecodeworkers.com', }, emailTemplate,)

    ctx.send({ response: 'mailSended', valid: true })
  }

};
